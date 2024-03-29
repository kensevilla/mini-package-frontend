export default {
  getAll: () => fetch(
    "http://localhost:8080/package",
    {mode: 'cors'}
    ),
    createPackage: (newPackage) => fetch(
        "http://localhost:8080/package", {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(newPackage)
        })
}