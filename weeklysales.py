sales = [1200, 1500, 1800, 1000, 2200, 1700, 1900]

# User-defined function
def categorize(sale):
    if sale < 1300:
        return "Low"
    elif sale <= 1800:
        return "Medium"
    else:
        return "High"


# 1. Total weekly sales
total = sum(sales)

# 2. Average daily sales
average = total / len(sales)

# 3. Day with highest sales
highest = max(sales)
day = sales.index(highest) + 1

# 4. Number of days sales exceeded 1600
count = sum(1 for sale in sales if sale > 1600)

# 5. Categorize each day's sales
print("Total weekly sales:", total)
print("Average daily sales:", average)
print("Highest sales: Day", day, "=", highest)
print("Days with sales exceeding 1600:", count)

print("\nDaily Sales Categories:")
for i, sale in enumerate(sales, start=1):
    print("Day", i, ":", sale, "-", categorize(sale))