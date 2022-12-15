import { Card, Input, Button, Form } from "./form";

export default function LoginForm() {
  return (
    <Card>
      <Form>
        <Input name="e-mail" placeholder="Email" />
        <Input name="password" placeholder="password" />
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
}
