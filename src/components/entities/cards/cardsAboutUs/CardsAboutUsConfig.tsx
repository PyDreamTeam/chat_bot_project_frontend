import React from "react";
import Title from "@/src/components/shared/text/Title";
import Text from "@/src/components/shared/text/Text";
import Image from "next/image";

export const CARDS_ABOUT_US = [
     {
          id: 1,
          statistic: <Title type={"h4"} color={"blue"}>2.5k+</Title>,
          title: <Text type={"med20"} color={"dark"}>Подписчики</Text>,
          text: <Text type={"reg14"} color={"grey"}>
               За короткий промежуток времени увеличилось число подписчиков в социальных сетях
          </Text>,
     },
     {
          id: 2,
          img: <Image src={"img/Frame 1707478880.jpg"} alt={"Card"} width={312} height={253} />,
     },
     {
          id: 3,
          img: <Image src={"img/PhotoCard2.png"} alt={"Card"} width={312} height={253} />,
     },
     {
          id: 4,
          statistic: <Title type={"h4"} color={"blue"}>95%</Title>,
          title: <Text type={"med20"} color={"dark"}>Положительные отзывы</Text>,
          text: <Text type={"reg14"} color={"grey"}>
               Мы получаем множество положительных отзывов от наших клиентов, которые уже используют наш конструктор в своем бизнесе
          </Text>,
     },
];