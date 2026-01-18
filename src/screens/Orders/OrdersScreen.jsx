import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, RefreshControl } from 'react-native';
import OrderItem from '../../components/OrderItem';
import { fetchOrders } from '../../api/ordersApi';
import OrdersStyles from './OrdersStyles';
import strings from '../../constants/strings';
import { colors, spacing } from '../../theme';

/**
 * OrdersScreen Component
 * Displays order history list with API integration
 * @param {Object} props - Component props
 */
const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  // Load orders from API
  const loadOrders = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchOrders();

      if (result.success) {
        setOrders(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load orders');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Handle pull to refresh
  const onRefresh = () => {
    setRefreshing(true);
    loadOrders();
  };

  // Loading state
  if (loading && !refreshing) {
    return (
      <View style={OrdersStyles.container}>
        <View style={OrdersStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={OrdersStyles.loadingText}>Loading orders...</Text>
        </View>
      </View>
    );
  }

  // Error state
  if (error && !loading) {
    return (
      <View style={OrdersStyles.container}>
        <View style={OrdersStyles.errorContainer}>
          <Text style={OrdersStyles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }

  // Empty state
  if (orders.length === 0 && !loading) {
    return (
      <View style={OrdersStyles.container}>
        <View style={OrdersStyles.emptyContainer}>
          <Text style={OrdersStyles.emptyText}>{strings.noOrdersFound}</Text>
        </View>
      </View>
    );
  }

  // Orders list
  return (
    <View style={OrdersStyles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
        keyExtractor={(item) => item.orderId}
        contentContainerStyle={OrdersStyles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
          />
        }
      />
    </View>
  );
};

export default OrdersScreen;

