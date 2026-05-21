"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function SearchDropdown({ dataOptions = [], onSelect, onSubmit }) {
  console.log(onSubmit)
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [value, setValue] = React.useState("")

  const safeOptions = Array.isArray(dataOptions) ? dataOptions : []

  // filter by id, limit to 20
  const filteredOptions = safeOptions
    .filter(opt => opt.id.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 20)

  const handleSelect = (opt) => {
    setValue(opt.id)
    setSearch(opt.id)
    setOpen(false)
    if (onSelect) onSelect(opt)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const selectedId = value || filteredOptions[0]?.id
        if (!selectedId) return
        if (onSubmit) onSubmit(selectedId)
        setSearch('')
        setValue('')
        setOpen(false)
    }
    } 

  const handleSubmit = () => {
    const selected = value || filteredOptions[0]?.id
    if (!selected) return 
    if (onSubmit) onSubmit(selected)
    setValue('')
    setSearch('')
    setOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        placeholder="Search by module code..."
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setOpen(true)
          if (e.target.value === "") setValue("")
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
        Add
      </button>
      {open && filteredOptions.length > 0 && (
        <div className="absolute z-50 w-full border rounded shadow bg-background max-h-60 overflow-y-auto mt-1">
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
        <div className="absolute z-50 w-full border rounded shadow bg-background mt-1 px-3 py-2 text-sm text-muted-foreground">
          No modules found
        </div>
      )}
    </div>
  )
}