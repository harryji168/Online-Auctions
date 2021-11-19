class AddStatusToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :status, :string
  end
end
