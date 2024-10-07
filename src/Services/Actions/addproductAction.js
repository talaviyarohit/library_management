import { doc, collection, getDocs, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import { storage } from "../../firebaseConfring";
import generateUniqueId from "generate-unique-id";
import { db } from "../../firebaseConfring";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// Action creators
const addProducts = (addData) => {
    return {
        type: 'ADDPRODUCTS',
        payload: addData
    };
};

const viewOrderList = (order) => {
    console.log("orderAction", order);

    return {
        type: 'VIEWORDERLIST',
        payload: order
    }
}

const editData = (edit) => {
    return {
        type: 'EDITPRODUCT',
        payload: edit
    };
};
const viewData = (view) => {
    return {
        type: 'VIEWPRODUCT',
        payload: view
    };
};

const updateProduct = () => {
    return {
        type: 'UPDATEPRODUCT',
    };
};

const Showoredr = (data) => {
    console.log("data");

    return {
        type: 'SHOWORDER',
        payload: data
    }
}

// Thunk to add a new product
export const addProductAsync = (pro) => {
    console.log("data", pro);
    return async (dispatch) => {
        try {
            pro.id = generateUniqueId({
                length: 4,
                useLetters: false,
            });
            await setDoc(doc(db, 'products', `${pro.id}`), pro);
            dispatch(getProductsAsync());
        }
        catch (err) {
            console.log("Error adding document: ", err);
        }
    };
};

// Thunk to get all products
export const getProductsAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            let proData = [];

            querySnapshot.forEach((doc) => {
                proData = [...proData, doc.data()];
            });

            dispatch(addProducts(proData));
        } catch (err) {
            console.log("Error fetching documents: ", err);
        }
    };
};


//thunk action using for display to user orders
export const getUserorderPro = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'UserOrder'));
            let orders = [];

            querySnapshot.forEach((doc) => {
                orders = [...orders, doc.data()];
            });

            dispatch(viewOrderList(orders));
            console.log("orderAction2", orders);

        } catch (err) {
            console.log("Error fetching documents: ", err);
        }
    };
};



// Thunk to edit a product
export const editProductsAsync = (editdata) => {
    return async (dispatch) => {
        try {
            dispatch(editData(editdata));
        } catch (err) {
            console.log("Failed to update document:", err);
        }
    };
};

// Thunk to view a product
export const viewProductsAsync = (viewdata) => {
    return async (dispatch) => {
        try {
            dispatch(editData(viewdata));
        } catch (err) {
            console.log("Failed to update document:", err);
        }
    };
};

// Thunk to update a product
export const updateDataAsync = (update) => {
    console.log("update ", update);

    return async (dispatch) => {
        try {
            const productRef = doc(db, 'products', `${update.id}`);
            await updateDoc(productRef, update);
            dispatch(updateProduct());
            dispatch(getProductsAsync());
        } catch (err) {
            console.log("Error updating document: ", err);
        }
    };
};


export const deleteproAsync = (deletePro) => {
    return async (dispatch) => {
        try {

            await deleteDoc(doc(db, 'products', deletePro));
            dispatch(getProductsAsync());
        } catch (err) {
            console.log("Error deleting document: ", err);
        }
    }
}

export const uploadImages = (file) => {
    return (dispatch) => {

        const storageRef = ref(storage, `productsimg/${file.name}`);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    };
};


export const updateImg = (file) => {
    return (dispatch) => {

        const storageRef = ref(storage, `productsimg/${file.name}`);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    };
};

export const oredrShowAsync = (showOrder) => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'UserOrder'));

            let foundOrder = null
            querySnapshot.forEach((doc) => {

                if (doc.id === showOrder) {
                    foundOrder = { id: doc.id, ...doc.data() };
                }
            });
            dispatch(Showoredr(foundOrder))

        } catch (err) {
            console.error(err);
        }
    }
}

export const updateOrderStatusAsync = (orderId, status) => {
    console.log("status",status);
    
    return async (dispatch) => {
        try {

            await updateDoc(doc(db, "UserOrder", orderId), { status: status });


            dispatch(getUserorderPro());
        } catch (error) {
            console.error("Error updating order status: ", error);
        }
    }
};