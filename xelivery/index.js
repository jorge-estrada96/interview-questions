const { Couriers, Packages, STATUSES } = require("./data");

const assignCourierPackages = (courier, startIndex) => {
  return Packages.slice(startIndex, courier.maxPackages + startIndex).map(
    (pkg) => ({
      ...pkg,
      courierName: courier.name,
      status: STATUSES.onWay,
    })
  );
};

const assignDelayedPackages = (startIndex) => {
  return Packages.slice(startIndex).map((pkg) => ({
    ...pkg,
    status: STATUSES.delayed,
  }));
};

const getAssignedPackages = () => {
  let packagesIndex = 0;
  const assignedPackages = [];

  for (const courier of Couriers) {
    const courierPackages = assignCourierPackages(courier, packagesIndex);

    assignedPackages.push(...courierPackages);
    packagesIndex += courier.maxPackages;
  }

  const delayedPackages = assignDelayedPackages(packagesIndex);
  assignedPackages.push(...delayedPackages);

  return assignedPackages;
};

const getPackagesOfCourier = (name, packages) => {
  return packages.filter((pkg) => pkg.courierName === name);
};

const getShipments = () => {
  const packages = getAssignedPackages();

  return Couriers.map((courier) => ({
    ...courier,
    packages: getPackagesOfCourier(courier.name, packages),
  }));
};

const getDelayedPackages = () => {
  const packages = getAssignedPackages();
  return packages.filter((pkg) => pkg.status === STATUSES.delayed);
};

const shipments = getShipments();
const delayed = getDelayedPackages();

console.log({ shipments, delayed });
