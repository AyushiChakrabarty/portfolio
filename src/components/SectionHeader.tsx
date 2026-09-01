import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h1 className="section-heading">{title}</h1>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeader;
