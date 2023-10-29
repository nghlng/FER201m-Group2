const initstate = {
  isLoggedIn: false, // để biết đã đăng nhập hay chưa nếu rồi thì là true còn chưa thì là false
  token: null, //để luu json web token
};

const authReducer = (state = initstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
