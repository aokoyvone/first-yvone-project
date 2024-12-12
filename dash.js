// Sample data (this can also come from an API or a file)
const salesData = [
    { OrderID: 1, CustomerID: 101, FoodItem: "Burger", TotalAmount: 8.5 },
    { OrderID: 2, CustomerID: 102, FoodItem: "Pizza", TotalAmount: 12.0 },
    { OrderID: 3, CustomerID: 101, FoodItem: "Burger", TotalAmount: 8.5 },
    { OrderID: 4, CustomerID: 103, FoodItem: "Fries", TotalAmount: 3.5 },
    { OrderID: 5, CustomerID: 104, FoodItem: "Burger", TotalAmount: 8.5 },
    { OrderID: 6, CustomerID: 102, FoodItem: "Pizza", TotalAmount: 12.0 },
    { OrderID: 7, CustomerID: 105, FoodItem: "Soda", TotalAmount: 2.0 },
    { OrderID: 8, CustomerID: 101, FoodItem: "Pizza", TotalAmount: 12.0 },
];

// Calculate Total Sales
const totalSales = salesData.reduce((sum, order) => sum + order.TotalAmount, 0);

// Calculate Number of Unique Customers
const uniqueCustomers = new Set(salesData.map(order => order.CustomerID)).size;

// Rank Food Items by Order Count
const foodCounts = salesData.reduce((counts, order) => {
    counts[order.FoodItem] = (counts[order.FoodItem] || 0) + 1;
    return counts;
}, {});

// Extract Food Items and Order Counts for Chart
const foodItems = Object.keys(foodCounts);
const orderCounts = Object.values(foodCounts);

// Update HTML with Calculated Metrics
document.getElementById("total-sales").querySelector("p").innerText ='$$,{totalSales.toFixed,(2)}';
document.getElementById("num-customers").querySelector("p").innerText = uniqueCustomers;

// Create Bar Chart for Most Ordered Food Items
const ctx = document.getElementById("foodChart").getContext("2d");
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: foodItems,
        datasets: [{
            label: 'Order Count',
            data: orderCounts,
            backgroundColor: '#4caf50',
            borderColor: '#388e3c',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Order Count'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

