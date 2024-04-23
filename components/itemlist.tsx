"use client";

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/DVs0f51J3Fm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Badge } from "@/components/ui/badge"
import { CardContent, Card } from "@/components/ui/card"
import {gql, useQuery} from "@apollo/client";
import { useContext } from 'react';
import Image from "next/image";

export function ItemList() {

    const { data } = useQuery(gql`
    query GetItems {
      item {
        id
        name
        desc
        price
        image
        color_options
        size_options
      }
    }
  `);
    const items = data?.item;

  return (
    <div className="grid grid-cols-4 gap-4">
        {items?.map((item: any) => (
            <Card className="w-full" key={item.id}>
                <CardContent className="p-2">
                    <Image
                        alt="Product Image"
                        className="w-full h-auto"
                        height="250"
                        src={`https://random.imagecdn.app/500/150`}
                        style={{
                            aspectRatio: "200/250",
                            objectFit: "cover",
                        }}
                        width="200"
                    />
                    <Badge className="absolute top-2 left-2" variant="secondary">
                        20%
                    </Badge>
                    <HeartIcon className="absolute top-2 right-2 h-5 w-5" />
                    <p className="font-semibold mt-2">{item.name}</p>
                    <p className="text-sm">{item.title}</p>
                    <p className="font-bold mt-1">{item.price}</p>
                </CardContent>
            </Card>
            ))}


    </div>
  )
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
