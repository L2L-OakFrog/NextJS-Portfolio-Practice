"use client";
import versionHistory from '../../data/version-history.json';

export default function VersionHistory() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Version History</h1>
      <div className="space-y-8">
        {versionHistory.versions.map((version) => (
          <div key={version.version} className="bg-white/5 p-6 rounded-lg border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{version.version}</h2>
              <span className="text-neutral-400">{version.date}</span>
            </div>
            <ul className="list-disc pl-5 space-y-1">
              {version.changes.map((change, i) => (
                <li key={i} className="text-neutral-300">{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}