import styles from "./Horizontal.module.css";
const products = [
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "SUGAR Smudge Me Not Liquid Mini Lipstick Bold Set(1.1ml E...",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    offprice: "₹999",
    price: "899",
    button: "view",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    price: "899",
  },
  {
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "this is a para",
    subtittle: "1.1each",
    badge: "BESTSELLER",
    prize: "899",
  },
];

function Hori() {
  return (
    <>
      <div className={styles.media_scroller}>
        {products.map((product, index) => (
          <div className={styles.media_element}>
            <img src={`${product.url}`} alt="" />
            <p className={styles.detail}>{`${product.tittle}`}</p>
            <div className={styles.subtittle}>1.1ml Each </div>
            <div className="css-lf8wwq">
              <ul className="css-op2i1d">
                <li
                  tabindex="0"
                  role="button"
                  className="bestseller default-tag css-nr4f1"
                >
                  BESTSELLER
                </li>
              </ul>
            </div>
            <p>{`${product.badge}`}</p>
            <div className={styles.reviewstar}>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="7"
                  viewBox="0 0 15 14"
                >
                  <path
                    fill="#2E2F3A"
                    d="M7.5 0a.3.3 0 00-.28.188L5.37 4.863l-5.085.255a.3.3 0 00-.27.202.29.29 0 00.095.32l3.96 3.174-1.3 4.816a.291.291 0 00.113.314c.1.071.235.075.34.01L7.5 11.26l4.278 2.692a.305.305 0 00.339-.01.291.291 0 00.113-.313l-1.3-4.816 3.96-3.175a.29.29 0 00.095-.32.3.3 0 00-.27-.201L9.63 4.863 7.78.188A.3.3 0 007.5 0zm0 1l1.664 4.166a.304.304 0 00.268.188L14 5.581l-3.558 2.826a.29.29 0 00-.102.304L11.51 13l-3.845-2.397a.312.312 0 00-.33 0L3.49 13l1.17-4.29a.29.29 0 00-.102-.303L1 5.58l4.568-.227a.304.304 0 00.268-.188L7.5 1z"
                  ></path>
                </svg>
              </span>
              <span className={styles.reviewcount}>1776</span>
            </div>
            <div className={styles.price1}>
              <span className={styles.offprice}>
                <span>{`${product.price}`}</span>
              </span>
              <span
                className={styles.pricediscountprice}
              >{`${product.price}`}</span>
              <span className={styles.priceoffer}>{`${product.price}`}</span>
            </div>
            <p>{`${product.subtittle}`}</p>
            <button className={styles.viewbtn}>view</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hori;
