import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import Banner from '../../components/Banner';
import CategoryItem from '../../components/CategoryItem';
import FeaturedProductCard from '../../components/FeaturedProductCard';
import { products, categories } from '../../data/products';
import HomeStyles from './HomeStyles';
import strings from '../../constants/strings';

/**
 * HomeScreen Component
 * Main home screen with banner, categories, and featured products
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object from React Navigation
 */
const HomeScreen = ({ navigation }) => {
  // Get featured products (first 3 products)
  const featuredProducts = products.slice(0, 3);

  // Handle category press
  const handleCategoryPress = (category) => {
    // Navigate to products screen with category filter
    navigation.navigate('Products', { category: category.name });
  };

  // Handle product press
  const handleProductPress = (product) => {
    navigation.navigate('Products', {
      screen: 'ProductDetails',
      params: { product },
    });
  };

  return (
    <ScrollView style={HomeStyles.container} showsVerticalScrollIndicator={false}>
      {/* Banner Section */}
      <Banner />

      {/* Categories Section */}
      <View style={HomeStyles.section}>
        <Text style={HomeStyles.sectionTitle}>{strings.categories}</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem
              category={item}
              onPress={() => handleCategoryPress(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={HomeStyles.categoryList}
        />
      </View>

      {/* Featured Products Section */}
      <View style={HomeStyles.section}>
        <Text style={HomeStyles.sectionTitle}>{strings.featuredProducts}</Text>
        <FlatList
          data={featuredProducts}
          renderItem={({ item }) => (
            <FeaturedProductCard
              product={item}
              onPress={() => handleProductPress(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={HomeStyles.featuredList}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

