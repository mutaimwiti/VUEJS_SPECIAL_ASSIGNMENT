export const CREATE_CATEGORY = (state, { name, description }) => {
    state.categories.push(
        {
            name: name,
            description: description
        }
    )
};

export const CREATE_ITEM = (state, { name, category, stock, units }) => {
    state.items.push(
        {
            name: name,
            category: category,
            stock: stock,
            units: units
        }
    )
};

export const REMOVE_CATEGORY = (state, category) => {
    state.categories.splice(state.categories.indexOf(category), 1);
};

export const EDIT_CATEGORY = (state, { old, name, description }) => {
    let index = state.categories.indexOf(old);
    state.categories[index].name = name;
    state.categories[index].description = description;
};

export const REMOVE_ITEM = (state, item) => {
    state.items.splice(state.items.indexOf(item), 1);
};

export const EDIT_ITEM = (state, { old, name, category, stock, units }) => {
    let index = state.items.indexOf(old);
    state.items[index].name = name;
    state.items[index].category = category;
    state.items[index].stock = stock;
    state.items[index].units = units;
};

export const ADD_ITEM_TO_CART = (state, { item, qty }) => {
    state.cart.push({
        item: item,
        qty: qty
    });

    //update the stock
    state.items[item].stock = state.items[item].stock - qty;
};

export const CLEAR_CART = (state) => {
    for (let x = 0; x < state.cart.length; x++) {
        //update quantity for all items
        state.items[state.cart[x].item].stock = state.items[state.cart[x].item].stock + Number(state.cart[x].qty);
    }

    //remove all items from cart
    state.cart = [];
};

export const REMOVE_ITEM_FROM_CART = (state, { item }) => {
    //get qty for our item on cart
    let qty = state.cart.filter((itm) => {
        return itm.item === item;
    })[0].qty;

    //discard whatever item matches our item
    state.cart = state.cart.filter((itm) => {
        return !(itm.item === item);
    });

    //update the stock
    state.items[item].stock = state.items[item].stock + Number(qty);
};

export const mutations = {
    CREATE_CATEGORY,
    CREATE_ITEM,
    REMOVE_CATEGORY,
    EDIT_CATEGORY,
    REMOVE_ITEM,
    EDIT_ITEM,
    ADD_ITEM_TO_CART,
    CLEAR_CART,
    REMOVE_ITEM_FROM_CART
};
