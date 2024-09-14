import { useParams } from "react-router-dom";
import { properties_id } from "../data/RealEstates";
import ShortDate from "../components/ShortDateConverter";
import ListItem from "../components/ListItem";
import { ReactComponent as Location } from "../assets/images/location-marker.svg";
import { ReactComponent as Area } from "../assets/images/space.svg";
import { ReactComponent as Bed } from "../assets/images/bed.svg";
import { ReactComponent as ZipCode } from "../assets/images/Locate.svg";
import { ReactComponent as Gmail } from "../assets/images/Gmail.svg";
import { ReactComponent as Phone } from "../assets/images/Phone.svg";
import { ReactComponent as Back } from "../assets/images/BackArrow.svg";
import { properties } from "../data/Properties";
import { agents } from "../data/Agents";
import Button from "../components/Button";

const MappedItems = () => {
  const { id } = useParams();
  const property = properties_id.find((p) => p.id === parseInt(id));
  const agent = agents.find((p) => p.id === parseInt(id));
  if (!property) {
    return <div className="text-red-700">Property not found</div>;
  }

  console.log(agent);

  return (
    <>
      <a href="/">
        <Back />
      </a>
      <div className="flex gap-[70px] pt-[35px]">
        <div className="h-[670px] w-[840px] text-right space-y-3">
          <img
            src={property.image}
            alt={`Property ${property.id}`}
            className="rounded-b-none w-full h-[670px] rounded-[14px]"
          />
          <span className="w-full text-[#808A93]">
            გამოქვეყნების თარიღი{" "}
            <ShortDate className="text-[#808A93]" date={property.created_at} />
          </span>
        </div>
        <div className="max-w-[500px] w-full">
          <div className="space-y-6">
            <span className="text-[48px] font-bold">{property.price} ₾</span>
            <ul className="space-y-4">
              <ListItem variant="gray">
                <Location /> {property.city.name}, {property.address}
              </ListItem>
              <ListItem variant="gray">
                <Area /> ფართი {property.area} მ²
              </ListItem>
              <ListItem variant="gray">
                <Bed /> საძინებელი {property.bedrooms}
              </ListItem>
              <ListItem variant="gray">
                <ZipCode className="ml-[2px]" /> საფოსტო ინდექსი{" "}
                {property.zip_code}
              </ListItem>
            </ul>
          </div>
          <div className="mt-10 space-y-[50px]">
            <p className="max-h-[78px] h-full overflow-scroll text-lg text-[#808A93]">
              {property.description}
            </p>
            <div className="w-full h-[175px] border-[1px] border-[#DBDBDB] rounded-lg ">
              <div className="px-5 pt-6 space-y-4">
                <div className="flex items-center gap-[14px]">
                  <div className="w-[72px] h-[72px] rounded-[100%] overflow-hidden">
                    <img
                      src={agent.avatar}
                      alt="Agent Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-medium">
                      {agent.name}
                    </span>
                    <span className="text-[14px] text-[#676E76]">აგენტი</span>
                  </div>
                </div>
                <ul>
                  <ListItem variant="gray_mini">
                    <Gmail /> {agent.email}
                  </ListItem>
                  <ListItem variant="gray_mini">
                    <Phone /> {agent.phone}
                  </ListItem>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-[30px]">
            <Button variant="outline_gray" text="ლისტინგის წაშლა" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MappedItems;
