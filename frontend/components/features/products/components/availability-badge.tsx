import { Badge } from "@/components/ui/badge";

export function AvailabilityBadge({ isAvailable }: { isAvailable: boolean }) {
  return (
    <Badge variant={isAvailable ? "default" : "destructive"}>
      {isAvailable ? "Dostępny" : "Niedostępny"}
    </Badge>
  );
}