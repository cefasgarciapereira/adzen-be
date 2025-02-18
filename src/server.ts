import { adScheduling } from "./infrastructure/cron-jobs";
import { app, port } from "./app";

adScheduling.start();

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
