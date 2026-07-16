const BASE_UL = "https://restcountries.com/v3.1/name";

export async function getCountryDetails(country) {
  try {
    const response = await fetch(
      `${BASE_URL}/${country}?fullText=true`
    );

    if (!response.ok) {
      throw new Error("Country not found.");
    }

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}