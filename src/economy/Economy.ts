import { Player } from 'beapi-core'
import { moneyModal } from '../index.js'
import { Money } from '../types/Money.js'

class Economy {
  public getMoney(player: Player): number {
    return moneyModal.find({ player: player.getName() }).money
  }

  public getMoneyByName(name: string): number {
    return moneyModal.find({ player: name }).money
  }

  public setMoney(player: Player, money: number): void {
    const entry = moneyModal.find({ player: player.getName() })
    entry.money = money
    entry.save()
  }

  public setMoneyByName(name: string, money: number): void {
    const entry = moneyModal.find({ player: name })
    entry.money = money
    entry.save()
  }

  public addMoney(player: Player, money: number): void {
    const entry = moneyModal.find({ player: player.getName() })
    entry.money = entry.money + money
    entry.save()
  }

  public addMoneyByName(name: string, money: number): void {
    const entry = moneyModal.find({ player: name })
    entry.money = entry.money + money
    entry.save()
  }

  public removeMoney(player: Player, money: number): void {
    const entry = moneyModal.find({ player: player.getName() })
    entry.money = entry.money + money
    entry.save()
  }

  public removeMoneyByName(name: string, money: number): void {
    const entry = moneyModal.find({ player: name })
    entry.money = entry.money - money
    entry.save()
  }

  public getAll(): Money[] {
    return moneyModal.findAll({})
  }
}

export const economy = new Economy()