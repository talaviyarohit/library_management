const initialState = {
    allproducts: [],
    userOrder : [],
    userOrderDetails : [],
    product: null,
};

function adminReducer(state = initialState, action) {

    switch (action.type) {
        case 'ADDPRODUCTS':
            // console.log("notes1", action.payload);
            return {
                ...state,
                allproducts: action.payload,
            };
            case 'EDITPRODUCT':
               
                const editSinglerec = state.allproducts.find(
                    (product) => product.id === action.payload 
                );
    
                return {
                    ...state,
                    product: editSinglerec,
                    // isEdit: true,
                };

                case 'VIEWPRODUCT':
               
                const viewSinglerec = state.allproducts.find(
                    (product) => product.id === action.payload 
                );
    
                return {
                    ...state,
                    product: viewSinglerec,
                    // isEdit: true,
                };

        case "UPDATEPRODUCT":
            return{
                isEdit : false
            }

            case 'VIEWORDERLIST':
                return{
                    userOrder : action.payload
                }

            case 'SHOWORDER':
                console.log("oredrRedu",action.payload);
                
                return{
                    ...state,
                    userOrderDetails : action.payload
                }
        default:
            return state;
    }
}

export default adminReducer;