
function Main(): JSX.Element {
    window.scroll(0, 0);
      return (
        <div className="main">
            <h1 className="main-title">Clients cards</h1>
            <Cards/>
            <Pagination/>
        </div>
      );
    }
    
    export default Main;
    