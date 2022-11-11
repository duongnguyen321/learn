import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "This is the Keychron k8",
      description: "Cái này a Ba đang dùng này",
      price: 15.0,
      image:
        "https://hanoicomputercdn.com/media/product/55581_ban_phim_co_keychron_k8_j3_gateron_brown_switch_nhom_rgb_0001_2.jpg",
    },
    {
      id: 2,
      title: "This is Tester68",
      description: "Cái này của a Tuấn Anh",
      price: 20.0,
      image:
        "https://photo2.tinhte.vn/data/attachment-files/2021/08/5596207_image.jpg",
    },
    {
      id: 3,
      title: "Fl680 của a Hà",
      description: "Như tên. Cái này của a Hà",
      price: 25.0,
      image:
        "https://img.websosanh.vn/v2/users/root_product/images/ban-phim-keyboard-fl-esport/o8jmz60x8cdpl.jpg?compress=85&width=220",
    },
    {
      id: 4,
      title: "Rk71 full mod promax",
      description: "Cái này của e =)) ",
      price: 30.0,
      image:
        "https://preview.redd.it/wdr80dsccfl51.jpg?width=960&crop=smart&auto=webp&s=a59dd6cf3d5f17ab32a5462100d7b7520d469765",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
