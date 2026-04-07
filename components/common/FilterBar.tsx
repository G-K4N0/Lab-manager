import { Input } from "@/components/ui/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Button } from "@/components/ui/Button"
import { Search, X } from "lucide-react";
interface Filter {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    [key: string]: string | number | boolean | ((value: string) => void) | Array<{ value: string; label: string }> | undefined;
}

export default function FilterBar(
    searchValue: string,
    onSearchChange: (value: string) => void,
    filters: Filter[] = [],
    onClearFilters: () => void,
    searchPlaceholder: string = "Buscar..."
) {

    const hasActiveFilters = searchValue || filters.some(filter => filter.value && filter.value !== "all")

    return (
    <div className="bg-white rounded-2xl p-4 mb-6 border border-slate-100 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-slate-200"
          />
        </div>
        {filters.map((filter, i) => (
          <Select key={i} value={filter.value} onValueChange={filter.onChange}>
            <SelectTrigger className="w-full sm:w-44 border-slate-200">
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {filter.options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
        {hasActiveFilters && (
          <Button variant="outline" onClick={onClearFilters} className="shrink-0">
            <X className="h-4 w-4 mr-2" />
            Limpiar
          </Button>
        )}
      </div>
    </div>
  );
}