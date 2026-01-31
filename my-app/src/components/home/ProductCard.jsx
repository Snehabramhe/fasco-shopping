import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ title, price, image }) {
  return (
    <Card className="p-4">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4"
      />

      <h3 className="body-sm">{title}</h3>
      <p className="body-sm text-danger">{price}</p>

      <Badge className="mt-2">New</Badge>
    </Card>
  );
}
