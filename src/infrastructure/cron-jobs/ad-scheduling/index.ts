import cron from "node-cron";

const schedules = [
  { id: "123", date: "2025-02-19T03:00:00.000Z", status: "active" },
  { id: "456", date: "2025-02-19T03:00:00.000Z", status: "paused" },
  { id: "789", date: "2025-02-19T03:00:00.000Z", status: "canceled" },
  { id: "012", date: "2025-01-16T03:00:00.000Z", status: "active" },
  { id: "111", date: "2025-02-15T03:00:00.000Z", status: "paused" },
];

const adScheduling = cron.schedule("5 * * * * *", () => {
  const now = new Date();
  const pastItems = schedules.filter((item) => new Date(item.date) < now);

  if (pastItems.length > 0) {
    console.log("Itens com data anterior ao momento atual:");
    pastItems.forEach((schedule) =>
      console.log(`Ad ${schedule.id} sendo alterado para ${schedule.status}`),
    );
  } else {
    console.log("Nenhum agendamento encontrado no momento atual.");
  }
});

export default adScheduling;
