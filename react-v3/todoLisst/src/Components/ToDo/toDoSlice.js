import config from "../../Config.json";
const { SERVER_API } = config;
const todoApi = SERVER_API + "/doLists";

export const getTodos = async (store) => {
  //lấy store là cả state cả hàm dispatch của ProviderState
  // truyền vào store ở HOC getContext dưới dạng props
  // ShowToDo nhận được props qua HOC và import hàm getTodos
  // ShowToDo gọi hàm getTodos truyền vào đó cái store đã được lấy từ HOC
  const response = await fetch(todoApi);
  const todos = await response.json();
  // xử lý gọi và nhận dữ liệu gọi chung là xử lý action ở tất bên file toDoSlice
  store.dispatch({
    // ở đây gọi hàm setState để set data mới lấy về gán trong todos vào state
    doLists: todos,
    isLoading: false,
  });
};
export const addToDo = async (todo, store) => {
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (response.ok) {
    const data = await response.json();
    store.dispatch({
      doLists: store.data.doLists.concat(data),
    });
    console.log("runing 1");
  }
};
export const removeToDo = async (id, store) => {
  //lấy store là cả state cả hàm dispatch của ProviderState
  // truyền vào store ở HOC getContext dưới dạng props
  // ShowToDo nhận được props qua HOC và import hàm removeToDo
  // ShowToDo gọi hàm removeToDo truyền vào đó cái store đã được lấy từ HOC
  //  và id truyền từ map lấy data từ ProviderState truyền xuống HOC
  if (window.confirm("Bạn có chắc chắn")) {
    const response = await fetch(todoApi + "/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      const doLists = [...store.data.doLists];
      // clone data của state ProviderState => HOC => ShowToDo => store
      const index = doLists
        .map((x) => {
          return x.id;
        })
        .indexOf(id);
      doLists.splice(index, 1);
      // xử lý xóa 1 item theo thứ tự index theo id
      store.dispatch({
        // ở đây gọi hàm setState để set data mới sau khi xóa trong doLists clone
        //  để set vào state ProviderState thông qua hàm dispatch
        doLists: doLists,
      });
    }
  }
  console.log("runing 2");
};
export const completeToDo = async (id, checkedStatus, store) => {
  const response = await fetch(todoApi + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isCompleted: checkedStatus,
    }),
  });
  if (response.ok) {
    getTodos(store);
  }
  console.log("runing 3");
};
export const filterToDos = async (params, store) => {
  const queryString = new URLSearchParams(params).toString();
  store.dispatch({
    isLoading: true,
  });
  const response = await fetch(`${todoApi}?${queryString}`);
  const data = await response.json();
  store.dispatch({
    doLists: data,
    isLoading: false,
  });
  console.log("runing 4");
};
