let menu_items = document.querySelector('.menu-items');

const fooditem = [
    {
        MenuItem: "Java Runtime Latte",
        MenuImg: '',
        Price: '$7.50',
        Type: 'coffee'
    },
    {
        MenuItem: 'Syntax Drip Coffee',
        MenuImg: '',
        Price: '$7.50',
        Type: 'coffee'
    },
    {
        MenuItem: 'C# Affogato',
        MenuImg: '',
        Price: '$8',
        Type: 'coffee'
    },
    {
        MenuItem: 'Excel Mazagran',
        MenuImg: '',
        Price: '$7',
        Type: 'coffee'
    },
    {
        MenuItem: 'Hotfix Honey Latte',
        MenuImg: '',
        Price: '$8',
        Type: 'coffee'
    },
    {
        MenuItem: 'Syntaxed Ice Latte',
        MenuImg: '',
        Price: '$7',
        Type: 'cold drinks'
    },
    {
        MenuItem: 'Looped Lasagna',
        MenuImg: '',
        Price: '$14.75',
        Type: 'dinner'
    },
    {
        MenuItem: 'Bug-free BBQ Ribs',
        MenuImg: '',
        Price: '$15',
        Type: 'dinner'
    },
    {
        MenuItem: 'Junior Hot Chocolate',
        MenuImg: '',
        Price: '$8',
        Type: 'kids'
    },
    {
        MenuItem: 'Recursive Ravioli',
        MenuImg: '',
        Price: '$13.50',
        Type: 'dinner'
    },
    {
        MenuItem: 'Algorithm Cobb Salad',
        MenuImg: '',
        Price: '$16',
        Type: 'dinner'
    },
    {
        MenuItem: 'Full Stack Burger',
        MenuImg: '',
        Price: '$14.75',
        Type: 'dinner'
    },
    {
        MenuItem: 'Stack Overflow Burger',
        MenuImg: '',
        Price: '$15',
        Type: 'dinner'
    },
    {
        MenuItem: 'Mini Debug Pizza',
        MenuImg: '',
        Price: '$12.75',
        Type: 'kids'
    },
    {
        MenuItem: 'Array of Veggies Wrap',
        MenuImg: '',
        Price: '$13',
        Type: 'vegan'
    },
    {
        MenuItem: 'Kernel Crusted Chicken',
        MenuImg: '',
        Price: '$10.50',
        Type: 'dinner'
    },
    {
        MenuItem: '404 Mac Not Found',
        MenuImg: '',
        Price: '$12',
        Type: 'dinner'
    },
    {
        MenuItem: 'Code Crashed Carbonara',
        MenuImg: '',
        Price: '$14.75',
        Type: 'dinner'
    },
    {
        MenuItem: 'Debugging BLT',
        MenuImg: '',
        Price: '$12.25',
        Type: 'dinner'
    },
    {
        MenuItem: 'Bug-free Berry Smoothie',
        MenuImg: '',
        Price: '$7',
        Type: 'cold drinks'
    },
    {
        MenuItem: 'Dynamic Data Bowl',
        MenuImg: '',
        Price: '$13',
        Type: 'dinner'
    },
    {
        MenuItem: 'Byte-sized Burger',
        MenuImg: '',
        Price: '$10',
        Type: 'kids'
    },
    {
        MenuItem: 'Boolean Bean Burrito',
        MenuImg: '',
        Price: '$15.75',
        Type: 'vegan'
    },
    {
        MenuItem: 'Milk & Cookies in Cache',
        MenuImg: '',
        Price: '$8.50',
        Type: 'kids'
    },
    {
        MenuItem: 'Binary Brewe',
        MenuImg: '',
        Price: '$9',
        Type: 'coffee'
    }
]

const menuContainer = document.getElementById('menu');

function renderMenu(items){
    menuContainer.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-type', item.Type)
    })
}