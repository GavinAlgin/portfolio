import Productcontent from '../assets/Hitube_P3EHZz1v2e_2024_12_05_13_40_03.jpg'
import Productcontent1 from '../assets/465078178_18024210530622763_3250160629146748543_n.jpg'
import Productcontent2 from '../assets/241538603_156393673284632_5417272010736800013_n.jpg'
import Productcontent3 from '../assets/240871623_1189446038202977_6949563621197514995_n.jpg'

const ProductList = () => {
  return (
    <div>
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                <p className="mt-4 max-w-md text-gray-500">
                    Where digital innovation meets GoodmoodDrip street fashion wear.
                </p>
                </header>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src={Productcontent}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic XXX Graphic Vast tee
                        </h3>

                        <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900"> R124.00</span>
                        </p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src={Productcontent1}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic XXX Graphic Vast tee
                        </h3>

                        <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900"> R124.00 </span>
                        </p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src={Productcontent2}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic Dark Green Tee
                        </h3>

                        <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900"> R150.00 </span>
                        </p>
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" className="group block overflow-hidden">
                    <img
                        src={Productcontent3}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        White Graphic Tee
                        </h3>

                        <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900">R150.00 </span>
                        </p>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default ProductList