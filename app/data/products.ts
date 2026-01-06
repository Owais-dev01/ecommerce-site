export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    // Chocolates
    { id: 1, name: "Dark Truffle Delight", category: "Chocolates", price: 12.99, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Rich dark chocolate truffles dusted with cocoa." },
    { id: 2, name: "Milk Chocolate Hazelnut", category: "Chocolates", price: 10.99, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Smooth milk chocolate with crunchy hazelnuts." },
    { id: 3, name: "White Raspberry Bliss", category: "Chocolates", price: 14.99, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Creamy white chocolate with raspberry swirls." },
    { id: 4, name: "Salted Caramel Squares", category: "Chocolates", price: 13.50, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Gooey salted caramel covered in dark chocolate." },
    { id: 5, name: "Mint Chocolate Thins", category: "Chocolates", price: 9.99, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Refreshing mint cream coated in chocolate." },
    { id: 6, name: "Orange Zest Bark", category: "Chocolates", price: 11.50, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Chocolate bark infused with orange zest." },
    { id: 7, name: "Almond Clusters", category: "Chocolates", price: 12.00, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Roasted almonds clustered in milk chocolate." },
    { id: 8, name: "Espresso Beans", category: "Chocolates", price: 8.99, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Crunchy espresso beans covered in dark chocolate." },
    { id: 9, name: "Pristine Pralines", category: "Chocolates", price: 16.99, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Assorted belgian pralines." },
    { id: 10, name: "Rum Raisin Drops", category: "Chocolates", price: 11.25, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800", description: "Rum-soaked raisins in rich chocolate." },

    // Cakes
    { id: 11, name: "Red Velvet Dream", category: "Cakes", price: 45.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "Classic red velvet with cream cheese frosting." },
    { id: 12, name: "Double Chocolate Fudge", category: "Cakes", price: 48.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800", description: "Decadent chocolate cake with fudge layers." },
    { id: 13, name: "Vanilla Bean Classic", category: "Cakes", price: 40.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "Fluffy vanilla sponge with buttercream." },
    { id: 14, name: "Lemon Drizzle", category: "Cakes", price: 38.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "Zesty lemon cake with glaze." },
    { id: 15, name: "Carrot Cake", category: "Cakes", price: 42.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "Spiced carrot cake with walnuts." },
    { id: 16, name: "Cheesecake Supreme", category: "Cakes", price: 50.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "New York style cheesecake." },
    { id: 17, name: "Black Forest", category: "Cakes", price: 46.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800", description: "Chocolate, cherries, and whipped cream." },
    { id: 18, name: "Strawberry Shortcake", category: "Cakes", price: 44.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "Light sponge with fresh strawberries." },
    { id: 19, name: "Tiramisu Cake", category: "Cakes", price: 49.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800", description: "Coffee flavored Italian dessert cake." },
    { id: 20, name: "Coconut Cream", category: "Cakes", price: 41.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800", description: "Tropical coconut cake with cream frosting." },

    // Pastries
    { id: 21, name: "Butter Croissant", category: "Pastries", price: 3.50, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Flaky, buttery French pastry." },
    { id: 22, name: "Pain au Chocolat", category: "Pastries", price: 4.00, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Croissant filled with dark chocolate." },
    { id: 23, name: "Blueberry Danish", category: "Pastries", price: 4.50, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Danish pastry topped with blueberries." },
    { id: 24, name: "Cinnamon Roll", category: "Pastries", price: 5.00, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Warm cinnamon roll with icing." },
    { id: 25, name: "Apple Turnover", category: "Pastries", price: 3.75, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Puff pastry filled with spiced apples." },
    { id: 26, name: "Éclair", category: "Pastries", price: 4.25, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Choux dough filled with cream, topped with chocolate." },
    { id: 27, name: "Fruit Tart", category: "Pastries", price: 5.50, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Mini tart with custard and fresh fruit." },
    { id: 28, name: "Macaron Set", category: "Pastries", price: 15.00, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800", description: "Box of colorful French macarons." },
    { id: 29, name: "Scone", category: "Pastries", price: 3.00, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Traditional scone with raisins." },
    { id: 30, name: "Profiteroles", category: "Pastries", price: 6.00, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800", description: "Cream puffs with chocolate sauce." },

    // Candies
    { id: 31, name: "Gummy Bears", category: "Candies", price: 4.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Classic fruity gummy bears." },
    { id: 32, name: "Jelly Beans", category: "Candies", price: 5.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Assorted gourmet jelly beans." },
    { id: 33, name: "Sour Worms", category: "Candies", price: 4.50, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Sour sugar coated gummy worms." },
    { id: 34, name: "Lollipops", category: "Candies", price: 2.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Large swirl lollipops." },
    { id: 35, name: "Licorice Twists", category: "Candies", price: 3.50, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Red strawberry licorice twists." },
    { id: 36, name: "Rock Candy", category: "Candies", price: 6.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Crystalized sugar on a stick." },
    { id: 37, name: "Cotton Candy", category: "Candies", price: 4.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Fluffy pink spun sugar." },
    { id: 38, name: "Toffee", category: "Candies", price: 7.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Buttery English toffee." },
    { id: 39, name: "Marshmallows", category: "Candies", price: 3.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "Soft fluffy marshmallows." },
    { id: 40, name: "Peppermint Bark", category: "Candies", price: 8.00, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a91f?auto=format&fit=crop&q=80&w=800", description: "White chocolate with crushed peppermint." },

    // Donuts
    { id: 41, name: "Glazed Donut", category: "Donuts", price: 2.00, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Classic honey glazed ring." },
    { id: 42, name: "Chocolate Frosted", category: "Donuts", price: 2.50, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Topped with chocolate icing and sprinkles." },
    { id: 43, name: "Strawberry Splash", category: "Donuts", price: 2.50, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Strawberry icing with rainbow sprinkles." },
    { id: 44, name: "Boston Cream", category: "Donuts", price: 3.00, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Custard filled with chocolate ganache." },
    { id: 45, name: "Jelly Filled", category: "Donuts", price: 3.00, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Raspberry jam filled powdered donut." },
    { id: 46, name: "Maple Bar", category: "Donuts", price: 2.75, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Long bar with maple icing." },
    { id: 47, name: "Old Fashioned", category: "Donuts", price: 2.25, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Crunchy cake donut." },
    { id: 48, name: "Cinnamon Sugar", category: "Donuts", price: 2.25, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Coated in cinnamon and sugar." },
    { id: 49, name: "Blueberry Cake", category: "Donuts", price: 2.50, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Blueberry infused cake donut." },
    { id: 50, name: "Cronut", category: "Donuts", price: 4.50, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Croissant-donut hybrid." },
    { id: 51, name: "Matcha Ring", category: "Donuts", price: 3.25, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=800", description: "Green tea matcha glaze." }
];
