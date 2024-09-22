function codePatient() {
  const numberPlate = Math.floor(Math.random() * 1000000);
  return numberPlate.toString().padStart(6, "0");
}

export { codePatient };
