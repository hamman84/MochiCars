/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import * as React from "react";
import { Calendar1Icon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { addDays, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { CalendarSelectorProps } from "./CalendarSelector.types";
import { cn } from "@/lib/utils";


export default function CalendarSelector(props: CalendarSelectorProps) {
    const { setDateSelected, className, carPriceDay } = props;
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(), 
        to: addDays(new Date(), 5)
    })

    useEffect(() => {
      setDateSelected({
        from: date?.from,
        to: date?.to 
      })
    
      return () => {
        
      }
    }, [date])
    
    const calculateDaysBetween = (from: Date, to: Date): number => {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffInTime = to.getTime() - from.getTime();
        return Math.round(diffInTime / oneDay);
    }

    const daysBetween = date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <>
      <div className={cn("grid gap-2", className)}>
        {date?.from && date?.to && (
          <>
            <p className="mt-4 text-lg text-black">Total days {daysBetween}</p>
            <p className="mb-4 text-md">
              Total price: {daysBetween * Number(carPriceDay)}€ (Taxes included)
            </p>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <Calendar1Icon className="w-4 h-4 mr-2" />
              {date?.from ? (
                date?.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {""}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
