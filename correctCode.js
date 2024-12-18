function calculateTotalPurchases(purchases) {
    let totalAmount = 0;
    purchases.forEach(purchase => {
      totalAmount += purchase;
    });
    return totalAmount;
  }
  
  let topThreePurchases = [10000, 20000, 30000];
  console.log(calculateTotalPurchases(topThreePurchases));