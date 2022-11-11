const root = document.getElementById("root");
// // tìm hiểu về props.children
// // tìm hiểu về propTypes
// // tìm hiểu về props.key
// // tìm hiểu về state khi truy cập cần this.state
// //  * không đc thay đổi trực tiếp mà dùng this.setState

// const menu = [
//   { href: "/", label: "Homepage" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
//   { href: "/products", label: "Products" },
//   { href: "/blogs", label: "Blog" },
//   { href: "/more", label: "More" },
// ];

// function List(props) {
//   return (
//     <ul className="Menu">
//       {menu.map((menu) => {
//         return (
//           <li key={menu.label}>
//             <a href={menu.href}>{menu.label}</a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// ReactDOM.render(<List />, root);


function ListPokemon(props) {
  return (
    <ul className="List">
      {pokemons.map((pokemons) => {
        return (
          <li key={pokemons.id}>
            <h2>{pokemons.name}</h2>
            <img src={pokemons.image} alt={pokemons.name} />
            <p>Type:{pokemons.type}</p>
          </li>
        );
      })}
    </ul>
  );
}

ListPokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};


ReactDOM.render(<ListPokemon />, root);

