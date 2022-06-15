import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";

function ProductCard(props) {
  const { id, title, price, rating, imgUrl } = props;
  return (
    <Link href={`/products/${id}`} passHref>
      <div className="border w-full h-full bg-white rounded-md cursor-pointer transition hover:scale-[1.01]">
        <div className="p-5">
          <div className="w-full h-60  relative">
            <Image src={imgUrl} alt={title} objectFit="contain" layout="fill" />
          </div>
        </div>
        <div className="p-5 border-t">
          <p className="line-clamp-2 text-sm mb-2">{title}</p>
          <p className="text-orange-500 text-2xl font-bold">${price}</p>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            value={rating.rate}
          />
          <p>Rating: {rating.count}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
