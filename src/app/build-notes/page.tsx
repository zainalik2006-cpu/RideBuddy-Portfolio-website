import type { Metadata } from "next";
import {
  Wrench,
  Zap,
  Package,
  Cable,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Build Notes",
  description: "Parts list, wiring, power, and mounting notes for the RideBuddy build.",
};

const partsList = [
  { part: "Raspberry Pi 4 Model B (4GB)", qty: 1, approxCost: "$55", source: "Adafruit / Amazon", notes: "2GB works too; 4GB gives headroom for logging + live dashboard" },
  { part: "ICM-20948 9-DOF IMU Breakout", qty: 1, approxCost: "$15", source: "SparkFun / Adafruit", notes: "I2C interface, address 0x69 (AD0 high)" },
  { part: "u-blox NEO-M8N GPS Module", qty: 1, approxCost: "$20", source: "Amazon / AliExpress", notes: "UART @ 9600 baud default, supports 10Hz update rate" },
  { part: "GPS Antenna (active, SMA)", qty: 1, approxCost: "$8", source: "Amazon", notes: "Magnetic mount; place with clear sky view" },
  { part: "LM2596 Buck Converter (12V→5V)", qty: 1, approxCost: "$3", source: "Amazon", notes: "Adjust output to 5.1V before connecting Pi" },
  { part: "MicroSD Card (32GB+ A2)", qty: 1, approxCost: "$10", source: "Amazon", notes: "A2-rated for write speed; endurance card preferred" },
  { part: "Waterproof Project Box", qty: 1, approxCost: "$12", source: "Amazon", notes: "IP65 rated, ~150×100×70mm fits Pi + wiring" },
  { part: "Jumper Wires (F-F, M-F)", qty: 1, approxCost: "$5", source: "Amazon", notes: "For prototyping; replace with soldered connections for rides" },
  { part: "USB-C Power Cable (short)", qty: 1, approxCost: "$5", source: "Amazon", notes: "From buck converter output to Pi power input" },
  { part: "Zip Ties + Velcro Straps", qty: 1, approxCost: "$5", source: "Amazon", notes: "For mounting the enclosure to the bike frame" },
];

const wiringSections = [
  {
    title: "IMU (I2C)",
    icon: Cable,
    connections: [
      "VCC → 3.3V (Pin 1)",
      "GND → GND (Pin 6)",
      "SDA → GPIO2 / SDA1 (Pin 3)",
      "SCL → GPIO3 / SCL1 (Pin 5)",
      "AD0 → 3.3V (sets address to 0x69)",
    ],
  },
  {
    title: "GPS (UART)",
    icon: Cable,
    connections: [
      "VCC → 5V (Pin 2)",
      "GND → GND (Pin 14)",
      "TX → GPIO15 / RXD (Pin 10)",
      "RX → GPIO14 / TXD (Pin 8)",
      "PPS → GPIO18 (Pin 12) — optional, for precise timing",
    ],
  },
  {
    title: "Power (12V → 5V)",
    icon: Zap,
    connections: [
      "Motorcycle 12V accessory → LM2596 VIN+",
      "Motorcycle GND → LM2596 VIN−",
      "LM2596 VOUT+ → USB-C 5V (via cable or direct)",
      "LM2596 VOUT− → USB-C GND",
      "IMPORTANT: Adjust pot to 5.1V BEFORE connecting Pi",
    ],
  },
];

const mountingTips = [
  "Use the waterproof enclosure mounted to the rear subframe or under the seat.",
  "Route GPS antenna cable to a location with clear sky view (top of tail or tank bag).",
  "Keep the IMU mounted rigidly and aligned with the bike's axes (X=forward, Y=left, Z=up).",
  "Secure all wiring with zip ties. Vibration will shake loose anything that isn't tied down.",
  "Add foam padding inside the enclosure to dampen vibration on the Pi and IMU.",
  "Use a fused connection to the motorcycle's accessory circuit — never wire directly to the battery.",
  "Test the entire system powered from a bench supply before mounting on the bike.",
];

export default function BuildNotesPage() {
  return (
    <div className="page-container">
      <SectionHeader
        title="Build Notes"
        description="Parts, wiring, power, and mounting — everything needed to replicate the hardware build."
      />

      {/* Shopping List */}
      <section className="mb-12">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Package className="h-5 w-5 text-primary-500" />
          Shopping List
        </h3>
        <div className="overflow-x-auto rounded-xl border border-surface-200 dark:border-surface-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-900">
                <th className="px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-200">Part</th>
                <th className="px-4 py-3 text-center font-semibold text-surface-700 dark:text-surface-200">Qty</th>
                <th className="px-4 py-3 text-right font-semibold text-surface-700 dark:text-surface-200">~Cost</th>
                <th className="hidden px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-200 md:table-cell">Source</th>
                <th className="hidden px-4 py-3 text-left font-semibold text-surface-700 dark:text-surface-200 lg:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {partsList.map((item) => (
                <tr
                  key={item.part}
                  className="border-b border-surface-100 transition-colors hover:bg-surface-50 dark:border-surface-800 dark:hover:bg-surface-900/50"
                >
                  <td className="px-4 py-3 font-medium text-surface-900 dark:text-white">{item.part}</td>
                  <td className="px-4 py-3 text-center text-surface-500 dark:text-surface-400">{item.qty}</td>
                  <td className="px-4 py-3 text-right font-mono text-surface-600 dark:text-surface-300">{item.approxCost}</td>
                  <td className="hidden px-4 py-3 text-surface-500 dark:text-surface-400 md:table-cell">{item.source}</td>
                  <td className="hidden px-4 py-3 text-surface-500 dark:text-surface-400 lg:table-cell">{item.notes}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-surface-50 dark:bg-surface-900">
                <td className="px-4 py-3 font-semibold text-surface-700 dark:text-surface-200">Total (approx)</td>
                <td />
                <td className="px-4 py-3 text-right font-mono font-semibold text-surface-900 dark:text-white">~$138</td>
                <td className="hidden md:table-cell" />
                <td className="hidden lg:table-cell" />
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Wiring */}
      <section className="mb-12">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Cable className="h-5 w-5 text-primary-500" />
          Wiring Connections
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wiringSections.map((section) => (
            <Card key={section.title}>
              <div className="mb-3 flex items-center gap-2">
                <section.icon className="h-4 w-4 text-primary-500" />
                <h4 className="font-semibold text-surface-900 dark:text-white">{section.title}</h4>
              </div>
              <ul className="space-y-1.5">
                {section.connections.map((conn) => (
                  <li key={conn} className="flex gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                    <span className="font-mono text-xs text-surface-600 dark:text-surface-300">{conn}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Power Considerations */}
      <section className="mb-12">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Zap className="h-5 w-5 text-primary-500" />
          Power Considerations
        </h3>
        <Card>
          <div className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
            <p>
              The Raspberry Pi 4 draws roughly 3–4W under load. The IMU and GPS add negligible current
              (~50mA combined). A standard motorcycle battery (12V, 7–14Ah) can power the system for
              hours, but always use a fused accessory circuit.
            </p>
            <p>
              The LM2596 buck converter is efficient (~90%) and handles the 12V→5V step-down. Adjust
              the trimmer pot to output exactly 5.1V before connecting to the Pi — under-voltage causes
              throttling and filesystem corruption.
            </p>
            <p>
              For longer rides or if you plan to add a display, consider a USB power bank as a buffer.
              The Pi can be powered simultaneously from the bike and a battery pack with a simple diode-OR
              circuit or a UPS HAT.
            </p>
          </div>
        </Card>
      </section>

      {/* Mounting */}
      <section>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-white">
          <Wrench className="h-5 w-5 text-primary-500" />
          Mounting Tips
        </h3>
        <Card>
          <ul className="space-y-3">
            {mountingTips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-surface-600 dark:text-surface-300">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
