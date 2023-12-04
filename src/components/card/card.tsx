function Card({card}): JSX.Element {

    const formField = {
        name: 'Name',
        email: 'E-mail',
        phone: 'Phone number',
      };
      
      return (
        <section className="card">
        <form
          className="form"
          action="#"
          method="post"
        >
          {Object.entries(formField).map(([key, value]) => (
              <div key={key} className="form__input-wrapper">
                <label className="visually-hidden">{value}</label>
                <input
                  className="form__input"
                  type={key}
                  name={key}
                  placeholder={card[key]}
                />
              </div>
            )
          )}
          <button
            className="form__submit button"
            type="submit"
          >
          </button>
        </form>
      </section>
      );
    }
    
    export default Card;
    