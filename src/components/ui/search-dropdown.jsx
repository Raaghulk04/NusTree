"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function SearchDropdown({
  dataOptions = [],
  onSelect,
  onSubmit,
  submitLabel = "Add",
  placeholder = "Search by module code..."
}) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [value, setValue] = React.useState("")

  const safeOptions = Array.isArray(dataOptions) ? dataOptions : []

  // Match either the primary identifier or the display title, then limit to 20.
  const filteredOptions = safeOptions
    .filter(opt => {
      const normalizedSearch = search.toLowerCase()
      return (
        opt.id.toLowerCase().includes(normalizedSearch) ||
        (opt.title?.toLowerCase().includes(normalizedSearch) ?? false)
      )
    })
    .slice(0, 20)

  const normalizeId = (id) => id.trim().toLowerCase()

  const handleSelect = (opt) => {
    setValue(opt.id)
    setSearch(opt.id)
    setOpen(false)
    if (onSelect) onSelect(opt)
  }

  const resolveSubmittedId = () => {
    const normalizedSearch = normalizeId(search)
    const exactMatch = safeOptions.find(opt => normalizeId(opt.id) === normalizedSearch)

    if (value && normalizeId(value) === normalizedSearch) {
      return value
    }

    return exactMatch?.id ?? null
  }

  const submitSelection = () => {
    const selectedId = resolveSubmittedId()
    if (!selectedId) return

    if (onSubmit) onSubmit(selectedId)
    setSearch('')
    setValue('')
    setOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submitSelection()
    }
  }

  const handleSubmit = () => {
    submitSelection()
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-2">
        <input
        className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        placeholder={placeholder}
        value={search}
        onChange={e => {
          const nextSearch = e.target.value
          setSearch(nextSearch)
          setOpen(true)
          if (nextSearch === "" || normalizeId(nextSearch) !== normalizeId(value || "")) {
            setValue("")
          }
        }}
        onKeyDown = {handleKeyDown}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)} // delay so click registers
        />
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault()  // prevents input from losing focus
            handleSubmit()
          }}
          className="px-4 py-2 text-sm rounded bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {submitLabel}
        </button>
      </div>
      
      {open && filteredOptions.length > 0 && (
        <div className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredOptions.map(opt => (
            <div
              key={opt.id}
              onMouseDown={() => handleSelect(opt)} // use mousedown not click to fire before onBlur
              className={cn(
                "px-3 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground",
                value === opt.id && "bg-accent text-accent-foreground"
              )}
            >
              <span className="font-medium">{opt.id}</span>
              <span className="text-muted-foreground ml-2">{opt.title}</span>
            </div>
          ))}
        </div>
      )}

      {open && search.length > 0 && filteredOptions.length === 0 && (
        <div className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          No modules found
        </div>
      )}
    </div>
  )
}
