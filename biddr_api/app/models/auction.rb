class Auction < ApplicationRecord
    has_many :bids, dependent: :destroy
    belongs_to :user, optional: true
    validates :status, inclusion: { in: %w(draft published reserve_met) }
end

