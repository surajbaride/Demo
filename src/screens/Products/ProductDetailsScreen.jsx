import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Animated, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProductStyles from './ProductStyles';
import strings from '../../constants/strings';
import { createOrder } from '../../api/ordersApi';
import { colors, spacing, shadows } from '../../theme';

/**
 * ProductDetailsScreen Component
 * Displays detailed information about a selected product with order functionality
 * @param {Object} props - Component props
 * @param {Object} props.route - Route object containing navigation params
 * @param {Object} props.navigation - Navigation object
 */
const ProductDetailsScreen = ({ route, navigation }) => {
  const [ordering, setOrdering] = useState(false);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  // Get product data from navigation params
  const product = route?.params?.product;

  // Handle Order Now button press
  const handleOrderNow = async () => {
    if (!product) return;

    // Scale animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    setOrdering(true);

    try {
      const orderData = {
        productId: product.id,
        productName: product.name,
        quantity: 1,
        totalPrice: product.price,
      };

      const result = await createOrder(orderData);

      if (result.success) {
        Alert.alert(
          'Order Placed!',
          `Your order for ${product.name} has been placed successfully.`,
          [
            {
              text: 'View Orders',
              onPress: () => {
                navigation.navigate('Orders');
              },
            },
            {
              text: 'OK',
              style: 'cancel',
            },
          ]
        );
      } else {
        Alert.alert('Error', result.error || 'Failed to place order');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to place order. Please try again.');
    } finally {
      setOrdering(false);
    }
  };

  // If no product data, show error message
  if (!product) {
    return (
      <View style={ProductStyles.detailsContainer}>
        <Text style={ProductStyles.errorText}>{strings.productNotFound}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={ProductStyles.detailsContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        style={ProductStyles.detailsImage}
      />

      {/* Product Info */}
      <View style={ProductStyles.detailsInfo}>
        <Text style={ProductStyles.detailsName}>{product.name}</Text>
        <View style={ProductStyles.detailsPriceContainer}>
          <Text style={ProductStyles.detailsPrice}>
            ${product.price.toFixed(2)}
          </Text>
          <View style={ProductStyles.detailsRatingContainer}>
            <Text style={ProductStyles.detailsRating}>
              ⭐ {product.rating}
            </Text>
          </View>
        </View>

        {/* Category Badge */}
        <View style={ProductStyles.categoryBadge}>
          <Text style={ProductStyles.categoryText}>{product.category}</Text>
        </View>

        {/* Description */}
        <View style={ProductStyles.descriptionSection}>
          <Text style={ProductStyles.descriptionTitle}>{strings.description}</Text>
          <Text style={ProductStyles.descriptionText}>
            {product.description}
          </Text>
        </View>

        {/* Product Details */}
        <View style={ProductStyles.detailsSection}>
          <View style={ProductStyles.detailRow}>
            <Text style={ProductStyles.detailLabel}>{strings.productId}:</Text>
            <Text style={ProductStyles.detailValue}>#{product.id}</Text>
          </View>
          <View style={ProductStyles.detailRow}>
            <Text style={ProductStyles.detailLabel}>{strings.category}:</Text>
            <Text style={ProductStyles.detailValue}>{product.category}</Text>
          </View>
          <View style={ProductStyles.detailRow}>
            <Text style={ProductStyles.detailLabel}>{strings.rating}:</Text>
            <Text style={ProductStyles.detailValue}>
              {product.rating} / 5.0
            </Text>
          </View>
        </View>
      </View>

      {/* Floating Order Now Button */}
      <Animated.View
        style={[
          ProductStyles.orderButtonContainer,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        <TouchableOpacity
          onPress={handleOrderNow}
          disabled={ordering}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={colors.secondaryGradient}
            style={ProductStyles.orderButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={ProductStyles.orderButtonText}>
              {ordering ? 'Placing Order...' : 'Order Now'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

