interface PlusMarkerProps {
  className?: string;
}

export const PlusMarker = ({ className = "" }: PlusMarkerProps) => (
  <span className={`absolute text-muted-foreground text-lg font-light select-none z-10 ${className}`}>+</span>
);

interface SectionDividerProps {
  children: React.ReactNode;
  className?: string;
  showBorders?: boolean;
}

export const SectionDivider = ({ children, className = "", showBorders = true }: SectionDividerProps) => (
  <div className={`relative ${className}`}>
    {/* Corner Plus Markers */}
    <PlusMarker className="-top-2 -left-2" />
    <PlusMarker className="-top-2 -right-2" />
    <PlusMarker className="-bottom-2 -left-2" />
    <PlusMarker className="-bottom-2 -right-2" />
    
    {/* Border lines */}
    {showBorders && (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-border" />
      </div>
    )}
    
    {children}
  </div>
);

export default PlusMarker;
