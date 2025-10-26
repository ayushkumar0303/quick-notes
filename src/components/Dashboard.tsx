import TaskCard from "./TaskCard";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function Dashboard() {
  return (
    <div className="flex justify-between m-10 gap-10 h-[calc(100vh-112px)] border-1 p-6 shadow-md rounded-lg">
      <div className="w-1/2">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Add Task</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="title">Task title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Peer React..."
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Task description</Label>

                  <Input
                    id="description"
                    type="text"
                    placeholder="Learn the basics of React.js..."
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full" variant="bluebtn">
              Add
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/2">
        <p className="font-bold mb-5">Your Task</p>
        <div className="flex flex-col gap-3">
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
