import React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileOption from '../../components/ProfileOption';
import ProfileStyles from './ProfileStyles';
import strings from '../../constants/strings';

/**
 * ProfileScreen Component
 * Displays user profile with options and logout button
 * @param {Object} props - Component props
 */
const ProfileScreen = () => {
  // Handle logout action
  const handleLogout = () => {
    Alert.alert(
      strings.logoutTitle,
      strings.logoutMessage,
      [
        {
          text: strings.cancel,
          style: 'cancel',
        },
        {
          text: strings.logout,
          style: 'destructive',
          onPress: () => {
            // Handle logout logic here
            Alert.alert(strings.success, strings.logoutSuccess);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={ProfileStyles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <ProfileHeader />

      {/* Profile Options */}
      <View style={ProfileStyles.optionsContainer}>
        <ProfileOption icon="📦" title={strings.myOrders} onPress={() => {}} />
        <ProfileOption icon="❤️" title={strings.wishlist} onPress={() => {}} />
        <ProfileOption icon="📍" title={strings.addresses} onPress={() => {}} />
        <ProfileOption icon="💳" title={strings.paymentMethods} onPress={() => {}} />
        <ProfileOption icon="⚙️" title={strings.settings} onPress={() => {}} />
        <ProfileOption icon="ℹ️" title={strings.about} onPress={() => {}} />
      </View>

      {/* Logout Button */}
      <View style={ProfileStyles.logoutContainer}>
        <ProfileOption
          icon="🚪"
          title={strings.logout}
          onPress={handleLogout}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

