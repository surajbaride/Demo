import { mockApiCall, handleApiError } from './apiClient';

/**
 * Orders API
 * Handles all order-related API calls
 * Uses localStorage simulation for persistence
 */

// In-memory storage (simulating backend)
let ordersStorage = [];

/**
 * Initialize with sample orders if empty
 */
const initializeOrders = () => {
  if (ordersStorage.length === 0) {
    ordersStorage = [
      // January 2024 Orders
      {
        orderId: 'ORD-001',
        productId: 1,
        productName: 'Wireless Headphones',
        quantity: 1,
        totalPrice: 99.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-05T10:30:00Z',
      },
      {
        orderId: 'ORD-002',
        productId: 2,
        productName: 'Smart Watch',
        quantity: 1,
        totalPrice: 249.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-08T14:15:00Z',
      },
      {
        orderId: 'ORD-003',
        productId: 3,
        productName: 'Running Shoes',
        quantity: 2,
        totalPrice: 259.98,
        orderStatus: 'Delivered',
        createdAt: '2024-01-12T09:20:00Z',
      },
      {
        orderId: 'ORD-004',
        productId: 4,
        productName: 'Laptop Backpack',
        quantity: 1,
        totalPrice: 59.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-15T11:45:00Z',
      },
      {
        orderId: 'ORD-005',
        productId: 5,
        productName: 'Coffee Maker',
        quantity: 1,
        totalPrice: 79.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-18T16:30:00Z',
      },
      {
        orderId: 'ORD-006',
        productId: 6,
        productName: 'Bluetooth Speaker',
        quantity: 1,
        totalPrice: 49.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-20T13:10:00Z',
      },
      {
        orderId: 'ORD-007',
        productId: 7,
        productName: 'Leather Wallet',
        quantity: 1,
        totalPrice: 39.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-22T10:00:00Z',
      },
      {
        orderId: 'ORD-008',
        productId: 8,
        productName: 'Yoga Mat',
        quantity: 1,
        totalPrice: 29.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-25T15:20:00Z',
      },
      {
        orderId: 'ORD-009',
        productId: 9,
        productName: 'Phone Case',
        quantity: 2,
        totalPrice: 39.98,
        orderStatus: 'Delivered',
        createdAt: '2024-01-28T12:00:00Z',
      },
      {
        orderId: 'ORD-010',
        productId: 10,
        productName: 'Desk Lamp',
        quantity: 1,
        totalPrice: 34.99,
        orderStatus: 'Delivered',
        createdAt: '2024-01-30T14:45:00Z',
      },
      
      // February 2024 Orders
      {
        orderId: 'ORD-011',
        productId: 1,
        productName: 'Wireless Headphones',
        quantity: 1,
        totalPrice: 99.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-02T09:15:00Z',
      },
      {
        orderId: 'ORD-012',
        productId: 2,
        productName: 'Smart Watch',
        quantity: 1,
        totalPrice: 249.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-05T11:30:00Z',
      },
      {
        orderId: 'ORD-013',
        productId: 3,
        productName: 'Running Shoes',
        quantity: 1,
        totalPrice: 129.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-08T13:20:00Z',
      },
      {
        orderId: 'ORD-014',
        productId: 4,
        productName: 'Laptop Backpack',
        quantity: 2,
        totalPrice: 119.98,
        orderStatus: 'Delivered',
        createdAt: '2024-02-10T10:00:00Z',
      },
      {
        orderId: 'ORD-015',
        productId: 5,
        productName: 'Coffee Maker',
        quantity: 1,
        totalPrice: 79.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-12T15:45:00Z',
      },
      {
        orderId: 'ORD-016',
        productId: 6,
        productName: 'Bluetooth Speaker',
        quantity: 2,
        totalPrice: 99.98,
        orderStatus: 'Delivered',
        createdAt: '2024-02-15T09:30:00Z',
      },
      {
        orderId: 'ORD-017',
        productId: 7,
        productName: 'Leather Wallet',
        quantity: 1,
        totalPrice: 39.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-18T14:20:00Z',
      },
      {
        orderId: 'ORD-018',
        productId: 8,
        productName: 'Yoga Mat',
        quantity: 1,
        totalPrice: 29.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-20T11:10:00Z',
      },
      {
        orderId: 'ORD-019',
        productId: 9,
        productName: 'Phone Case',
        quantity: 1,
        totalPrice: 19.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-22T16:00:00Z',
      },
      {
        orderId: 'ORD-020',
        productId: 10,
        productName: 'Desk Lamp',
        quantity: 1,
        totalPrice: 34.99,
        orderStatus: 'Delivered',
        createdAt: '2024-02-25T12:30:00Z',
      },
      
      // March 2024 Orders
      {
        orderId: 'ORD-021',
        productId: 1,
        productName: 'Wireless Headphones',
        quantity: 2,
        totalPrice: 199.98,
        orderStatus: 'Delivered',
        createdAt: '2024-03-01T10:00:00Z',
      },
      {
        orderId: 'ORD-022',
        productId: 2,
        productName: 'Smart Watch',
        quantity: 1,
        totalPrice: 249.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-05T14:20:00Z',
      },
      {
        orderId: 'ORD-023',
        productId: 3,
        productName: 'Running Shoes',
        quantity: 1,
        totalPrice: 129.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-08T09:45:00Z',
      },
      {
        orderId: 'ORD-024',
        productId: 4,
        productName: 'Laptop Backpack',
        quantity: 1,
        totalPrice: 59.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-10T11:30:00Z',
      },
      {
        orderId: 'ORD-025',
        productId: 5,
        productName: 'Coffee Maker',
        quantity: 1,
        totalPrice: 79.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-12T15:00:00Z',
      },
      {
        orderId: 'ORD-026',
        productId: 6,
        productName: 'Bluetooth Speaker',
        quantity: 1,
        totalPrice: 49.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-15T13:15:00Z',
      },
      {
        orderId: 'ORD-027',
        productId: 7,
        productName: 'Leather Wallet',
        quantity: 2,
        totalPrice: 79.98,
        orderStatus: 'Delivered',
        createdAt: '2024-03-18T10:30:00Z',
      },
      {
        orderId: 'ORD-028',
        productId: 8,
        productName: 'Yoga Mat',
        quantity: 1,
        totalPrice: 29.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-20T12:00:00Z',
      },
      {
        orderId: 'ORD-029',
        productId: 9,
        productName: 'Phone Case',
        quantity: 3,
        totalPrice: 59.97,
        orderStatus: 'Delivered',
        createdAt: '2024-03-22T16:45:00Z',
      },
      {
        orderId: 'ORD-030',
        productId: 10,
        productName: 'Desk Lamp',
        quantity: 1,
        totalPrice: 34.99,
        orderStatus: 'Delivered',
        createdAt: '2024-03-25T09:20:00Z',
      },
      
      // April 2024 Orders (Mix of Delivered and Pending)
      {
        orderId: 'ORD-031',
        productId: 1,
        productName: 'Wireless Headphones',
        quantity: 1,
        totalPrice: 99.99,
        orderStatus: 'Delivered',
        createdAt: '2024-04-02T10:15:00Z',
      },
      {
        orderId: 'ORD-032',
        productId: 2,
        productName: 'Smart Watch',
        quantity: 1,
        totalPrice: 249.99,
        orderStatus: 'Pending',
        createdAt: '2024-04-05T14:30:00Z',
      },
      {
        orderId: 'ORD-033',
        productId: 3,
        productName: 'Running Shoes',
        quantity: 1,
        totalPrice: 129.99,
        orderStatus: 'Delivered',
        createdAt: '2024-04-08T11:00:00Z',
      },
      {
        orderId: 'ORD-034',
        productId: 4,
        productName: 'Laptop Backpack',
        quantity: 1,
        totalPrice: 59.99,
        orderStatus: 'Pending',
        createdAt: '2024-04-10T15:20:00Z',
      },
      {
        orderId: 'ORD-035',
        productId: 5,
        productName: 'Coffee Maker',
        quantity: 1,
        totalPrice: 79.99,
        orderStatus: 'Delivered',
        createdAt: '2024-04-12T09:45:00Z',
      },
      {
        orderId: 'ORD-036',
        productId: 6,
        productName: 'Bluetooth Speaker',
        quantity: 2,
        totalPrice: 99.98,
        orderStatus: 'Pending',
        createdAt: '2024-04-15T13:30:00Z',
      },
      {
        orderId: 'ORD-037',
        productId: 7,
        productName: 'Leather Wallet',
        quantity: 1,
        totalPrice: 39.99,
        orderStatus: 'Delivered',
        createdAt: '2024-04-18T10:15:00Z',
      },
      {
        orderId: 'ORD-038',
        productId: 8,
        productName: 'Yoga Mat',
        quantity: 1,
        totalPrice: 29.99,
        orderStatus: 'Pending',
        createdAt: '2024-04-20T14:00:00Z',
      },
      {
        orderId: 'ORD-039',
        productId: 9,
        productName: 'Phone Case',
        quantity: 1,
        totalPrice: 19.99,
        orderStatus: 'Delivered',
        createdAt: '2024-04-22T12:30:00Z',
      },
      {
        orderId: 'ORD-040',
        productId: 10,
        productName: 'Desk Lamp',
        quantity: 1,
        totalPrice: 34.99,
        orderStatus: 'Pending',
        createdAt: '2024-04-25T16:45:00Z',
      },
      
      // May 2024 Orders (Recent orders - Mix of statuses)
      {
        orderId: 'ORD-041',
        productId: 1,
        productName: 'Wireless Headphones',
        quantity: 1,
        totalPrice: 99.99,
        orderStatus: 'Pending',
        createdAt: '2024-05-01T09:00:00Z',
      },
      {
        orderId: 'ORD-042',
        productId: 2,
        productName: 'Smart Watch',
        quantity: 1,
        totalPrice: 249.99,
        orderStatus: 'Delivered',
        createdAt: '2024-05-03T11:20:00Z',
      },
      {
        orderId: 'ORD-043',
        productId: 3,
        productName: 'Running Shoes',
        quantity: 2,
        totalPrice: 259.98,
        orderStatus: 'Pending',
        createdAt: '2024-05-05T14:10:00Z',
      },
      {
        orderId: 'ORD-044',
        productId: 4,
        productName: 'Laptop Backpack',
        quantity: 1,
        totalPrice: 59.99,
        orderStatus: 'Delivered',
        createdAt: '2024-05-08T10:30:00Z',
      },
      {
        orderId: 'ORD-045',
        productId: 5,
        productName: 'Coffee Maker',
        quantity: 1,
        totalPrice: 79.99,
        orderStatus: 'Pending',
        createdAt: '2024-05-10T15:00:00Z',
      },
      {
        orderId: 'ORD-046',
        productId: 6,
        productName: 'Bluetooth Speaker',
        quantity: 1,
        totalPrice: 49.99,
        orderStatus: 'Delivered',
        createdAt: '2024-05-12T13:45:00Z',
      },
      {
        orderId: 'ORD-047',
        productId: 7,
        productName: 'Leather Wallet',
        quantity: 1,
        totalPrice: 39.99,
        orderStatus: 'Pending',
        createdAt: '2024-05-15T09:20:00Z',
      },
      {
        orderId: 'ORD-048',
        productId: 8,
        productName: 'Yoga Mat',
        quantity: 1,
        totalPrice: 29.99,
        orderStatus: 'Delivered',
        createdAt: '2024-05-18T11:15:00Z',
      },
      {
        orderId: 'ORD-049',
        productId: 9,
        productName: 'Phone Case',
        quantity: 2,
        totalPrice: 39.98,
        orderStatus: 'Pending',
        createdAt: '2024-05-20T14:30:00Z',
      },
      {
        orderId: 'ORD-050',
        productId: 10,
        productName: 'Desk Lamp',
        quantity: 1,
        totalPrice: 34.99,
        orderStatus: 'Delivered',
        createdAt: '2024-05-22T10:00:00Z',
      },
      
      // June 2024 Orders (Very Recent)
      {
        orderId: 'ORD-051',
        productId: 1,
        productName: 'Wireless Headphones',
        quantity: 1,
        totalPrice: 99.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-01T08:30:00Z',
      },
      {
        orderId: 'ORD-052',
        productId: 2,
        productName: 'Smart Watch',
        quantity: 1,
        totalPrice: 249.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-03T12:00:00Z',
      },
      {
        orderId: 'ORD-053',
        productId: 3,
        productName: 'Running Shoes',
        quantity: 1,
        totalPrice: 129.99,
        orderStatus: 'Delivered',
        createdAt: '2024-06-05T15:20:00Z',
      },
      {
        orderId: 'ORD-054',
        productId: 4,
        productName: 'Laptop Backpack',
        quantity: 1,
        totalPrice: 59.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-08T09:45:00Z',
      },
      {
        orderId: 'ORD-055',
        productId: 5,
        productName: 'Coffee Maker',
        quantity: 1,
        totalPrice: 79.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-10T13:10:00Z',
      },
      {
        orderId: 'ORD-056',
        productId: 6,
        productName: 'Bluetooth Speaker',
        quantity: 1,
        totalPrice: 49.99,
        orderStatus: 'Delivered',
        createdAt: '2024-06-12T11:30:00Z',
      },
      {
        orderId: 'ORD-057',
        productId: 7,
        productName: 'Leather Wallet',
        quantity: 1,
        totalPrice: 39.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-15T14:00:00Z',
      },
      {
        orderId: 'ORD-058',
        productId: 8,
        productName: 'Yoga Mat',
        quantity: 1,
        totalPrice: 29.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-18T10:20:00Z',
      },
      {
        orderId: 'ORD-059',
        productId: 9,
        productName: 'Phone Case',
        quantity: 1,
        totalPrice: 19.99,
        orderStatus: 'Delivered',
        createdAt: '2024-06-20T16:45:00Z',
      },
      {
        orderId: 'ORD-060',
        productId: 10,
        productName: 'Desk Lamp',
        quantity: 1,
        totalPrice: 34.99,
        orderStatus: 'Pending',
        createdAt: '2024-06-22T09:15:00Z',
      },
    ];
  }
};

// Initialize on first load
initializeOrders();

/**
 * Generate unique order ID
 * @returns {string} - Order ID
 */
const generateOrderId = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ORD-${timestamp}-${random}`;
};

/**
 * Fetch all orders
 * @returns {Promise<Array>} - Array of orders
 */
export const fetchOrders = async () => {
  try {
    await mockApiCall(null, false, 700);
    
    // Sort by creation date (newest first)
    const sortedOrders = [...ordersStorage].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return {
      success: true,
      data: sortedOrders,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

/**
 * Create a new order
 * @param {Object} orderData - Order data
 * @param {number} orderData.productId - Product ID
 * @param {string} orderData.productName - Product name
 * @param {number} orderData.quantity - Quantity
 * @param {number} orderData.totalPrice - Total price
 * @returns {Promise<Object>} - Created order
 */
export const createOrder = async (orderData) => {
  try {
    await mockApiCall(null, false, 800);

    const newOrder = {
      orderId: generateOrderId(),
      productId: orderData.productId,
      productName: orderData.productName,
      quantity: orderData.quantity,
      totalPrice: orderData.totalPrice,
      orderStatus: 'Pending',
      createdAt: new Date().toISOString(),
    };

    ordersStorage.push(newOrder);

    return {
      success: true,
      data: newOrder,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

/**
 * Update order status
 * @param {string} orderId - Order ID
 * @param {string} status - New status (Pending/Delivered)
 * @returns {Promise<Object>} - Updated order
 */
export const updateOrderStatus = async (orderId, status) => {
  try {
    await mockApiCall(null, false, 600);

    const orderIndex = ordersStorage.findIndex(
      (order) => order.orderId === orderId
    );

    if (orderIndex === -1) {
      return {
        success: false,
        data: null,
        error: 'Order not found',
      };
    }

    ordersStorage[orderIndex].orderStatus = status;

    return {
      success: true,
      data: ordersStorage[orderIndex],
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

/**
 * Get order by ID
 * @param {string} orderId - Order ID
 * @returns {Promise<Object>} - Order object
 */
export const getOrderById = async (orderId) => {
  try {
    await mockApiCall(null, false, 500);

    const order = ordersStorage.find((order) => order.orderId === orderId);

    if (!order) {
      return {
        success: false,
        data: null,
        error: 'Order not found',
      };
    }

    return {
      success: true,
      data: order,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error: handleApiError(error),
    };
  }
};

export default {
  fetchOrders,
  createOrder,
  updateOrderStatus,
  getOrderById,
};

