import * as actionTypes from "./actionTypes";

/* Herhangi bir kategoriye tıklandığında çalışan event aşağıdaki fonksiyona gelecek.
   Yani actionTypes ilgili reducerda görüldüğü anda,
   state'in payload'ı o andaki kategori olarak set edilecek. */

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json()) // sonuç json formatında, string gelir. bunu json a çeviriyorum.
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
