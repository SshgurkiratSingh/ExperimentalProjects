import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Breadcrumbs } from "@nextui-org/breadcrumbs";
import { CiSettings } from "react-icons/ci";
import { Chip } from "@nextui-org/chip";
export default function AboutPage() {
  return (
    <div>
      <Card className="min-w-[360px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md flex flex-inline gap-2">
              <CiSettings /> Config Portal
            </p>
            <p className="text-small text-default-500">
              ESP Master Node Control
            </p>
          </div>
        </CardHeader>
        
             <Divider />
        <Divider />
        <CardBody>
          <p></p>
        </CardBody>
        <Divider />
        <CardFooter>
          <div>Last Pinged: </div> <Chip> {new Date().toUTCString()}</Chip>
        </CardFooter>
      </Card>
    </div>
  );
}
