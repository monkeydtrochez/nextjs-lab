import Card from "@/app/components/card";

export default function DefaultLogin() {
  const isLoggedIn = true;
  return isLoggedIn ? <Card>Please login to continue</Card> : <></>;
}
