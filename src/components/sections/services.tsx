"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Wallet } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/ui-custom/animated";
import { DynamicIcon } from "@/components/ui-custom/icon";
import { useLang } from "@/components/language-provider";

export function Services() {
  const { t, copy } = useLang();
  const [filter, setFilter] = useState<string>("semua");
  const visible =
    filter === "semua"
      ? copy.services
      : copy.services.filter((s) => s.category === filter);

  return (
    <section
      id="layanan"
      className="relative overflow-hidden bg-secondary/50 py-24 sm:py-28"
      aria-label={t("svcAria")}
    >
      <div
        className="absolute left-[-8%] top-40 h-80 w-80 rounded-full bg-gold/10 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("svcEyebrow")}
          title={t("svcTitle")}
          highlight={t("svcHighlight")}
          description={t("svcDesc")}
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Tabs
            value={filter}
            onValueChange={(v) => setFilter(v)}
          >
            <TabsList className="h-auto flex-wrap justify-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm">
              {copy.serviceCategories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="rounded-full px-4 sm:px-5 py-2 text-[13px] font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Grid layanan */}
        <motion.div layout className="mt-12">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((service) => (
                <StaggerItem key={service.title} className="h-full">
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35 }}
                    className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/15"
                  >
                    {/* Ikon */}
                    <div className="flex items-start justify-between">
                      <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary p-3.5 text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <DynamicIcon name={service.icon} className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Fitur */}
                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-[12.5px] font-medium text-foreground/70"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-4">
                      <Badge
                        variant="secondary"
                        className="gap-1.5 bg-primary/10 font-bold text-primary"
                      >
                        <Wallet className="h-3.5 w-3.5" />
                        {service.price}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-[12px] font-semibold text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-gold" />
                        {service.time}
                      </span>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </AnimatePresence>
          </Stagger>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          {t("svcNotFound")}{" "}
          <a
            href="#kontak"
            className="font-bold text-primary underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
          >
            {t("svcAsk")}
          </a>{" "}
          {t("svcMore")}
        </motion.p>
      </div>
    </section>
  );
}
