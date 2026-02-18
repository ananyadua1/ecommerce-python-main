export const Card = ({ item }) => {
  const { store, actions } = useContext(Context);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (store.user && store.user.favorites.length > 0) {
      store.user.favorites.forEach((favorite) => {
        if (favorite.product.id === item.id) {
          setIsFavorite(true);
        }
      });
    }
  }, [store.user, item.id]);

  return (
    <div className="col-md-4">
      <div className="card rounded-0 border-0">

        {/* IMAGE */}
        <div className="zoom-img position-relative">
          <Link to={"/productDetails/" + item.id}>
            <img
              src={item.img}
              className="card-img-top"
              alt={item.name}
              style={{ height: "320px", objectFit: "cover" }}
            />
          </Link>

          <p className="quick-add p-2 position-absolute bottom-0 start-50 translate-middle-x bg-dark text-white">
            QUICK ADD
          </p>

          {store.user && (
            <i
              className={`fa-${isFavorite ? "solid" : "regular"} fa-heart p-2 position-absolute top-0 end-0`}
              onClick={() =>
                isFavorite
                  ? (actions.deleteFavorite(item.id), setIsFavorite(false))
                  : actions.addFavorite(item.id)
              }
            ></i>
          )}
        </div>

        {/* BODY */}
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-description text-muted small">
            {item.description}
          </p>
          <h6 className="fw-bold">${item.price}</h6>
        </div>

      </div>
    </div>
  );
};
