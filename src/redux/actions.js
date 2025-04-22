import { db, collection, getDocs } from "../../firebaseConfig";

// Carga general de datos base (colección: "home" o como la llames)
export const loadData = () => {
  return async function (dispatch) {
    const querySnapshot = await getDocs(collection(db, "home"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: "LOAD_DATA",
      payload: data,
    });
  };
};

export const loadArt = () => {
  return async function (dispatch) {
    const querySnapshot = await getDocs(collection(db, "art"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: "LOAD_ARTICLES",
      payload: data,
    });
  };
};

export const loadTexts = () => {
  return async function (dispatch) {
    const querySnapshot = await getDocs(collection(db, "texts"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: "LOAD_TEXTS",
      payload: data,
    });
  };
};

export const loadCatalog = () => {
  return async function (dispatch) {
    const querySnapshot = await getDocs(collection(db, "catalog"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: "LOAD_CATALOG",
      payload: data,
    });
  };
};

export const loadNotes = () => {
  return async function (dispatch) {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: "LOAD_NOTES",
      payload: data,
    });
  };
};

// Configuración de idioma (sin cambios)
export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});
