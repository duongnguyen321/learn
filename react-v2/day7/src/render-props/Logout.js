function Logout(props){

  const handleLogout = (e) => {
  
    e.preventDefault();
    
    sessionStorage.removeItem('loginId');

    props.render({
            loginId: 0
          })
  }

  return (
    <>
      
      <a href="#" onClick={handleLogout}>Đăng xuất</a>
    </>
  )
}

export default Logout;