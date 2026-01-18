import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import ProductCard from '../../components/ProductCard';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { fetchProducts, fetchProductsByCategory } from '../../api/productsApi';
import ProductStyles from './ProductStyles';
import strings from '../../constants/strings';
import { colors, spacing } from '../../theme';
import { getColumns } from '../../utils/responsive';

/**
 * ProductListScreen Component
 * Displays list of all products with API integration
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object from React Navigation
 * @param {Object} props.route - Route object containing navigation params
 */
const ProductListScreen = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get category filter from route params if available
  const categoryFilter = route?.params?.category;

  useEffect(() => {
    loadProducts();
  }, [categoryFilter]);

  // Load products from API
  const loadProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = categoryFilter
        ? await fetchProductsByCategory(categoryFilter)
        : await fetchProducts();

      if (result.success) {
        setProducts(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  // Handle product card press - navigate to details
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  // Loading state
  if (loading) {
    return (
      <View style={ProductStyles.listContainer}>
        <View style={ProductStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={ProductStyles.loadingText}>Loading products...</Text>
        </View>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={ProductStyles.listContainer}>
        <View style={ProductStyles.errorContainer}>
          <Text style={ProductStyles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <View style={ProductStyles.listContainer}>
        <View style={ProductStyles.emptyContainer}>
          <Text style={ProductStyles.emptyText}>{strings.noProductsFound}</Text>
        </View>
      </View>
    );
  }

  // Products list
  return (
    <View style={ProductStyles.listContainer}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={getColumns(2)}
        contentContainerStyle={ProductStyles.listContent}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={loadProducts}
      />
    </View>
  );
};

export default ProductListScreen;

