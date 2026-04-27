export type GeocodeResult = {
  displayName: string;
  address?: {
    road?: string;
    suburb?: string;
    city?: string;
    state?: string;
    country?: string;
  };
};

export async function reverseGeocode(
  lat: number,
  lng: number
): Promise<GeocodeResult | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );

    if (!res.ok) throw new Error("Failed fetch geocode");

    const data = await res.json();

    return {
      displayName: data.display_name,
      address: data.address,
    };
  } catch (error) {
    console.error("Geocode error:", error);
    return null;
  }
}